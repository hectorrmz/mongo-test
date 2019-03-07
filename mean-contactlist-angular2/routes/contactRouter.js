const express = require("express");

function routes(Contact) {
  const contactRouter = express.Router();

  contactRouter
    .route("/contacts")
    .get((req, res) => {
      Contact.find((err, contacts) => {
        if (err) {
          return handleError(res, err, "Failed to get contacts");
        }

        return res.json(contacts);
      });
    })
    .post((req, res) => {
      if (!req.body.name) {
        return handleError(
          res,
          "Invalid user input",
          "Must provide a name.",
          400
        );
      }

      const contact = new Contact(req.body);
      contact.save();

      return res.json(contact);
    });

  contactRouter.use("/contacts/:contactId", (req, res, next) => {
    Contact.findById(req.params.contactId, (err, contact) => {
      if (err) {
        return handleError(res, err, "Failed to get contact Information");
      }
      if (contact) {
        req.contact = contact;
        return next();
      }

      return res.sendStatus(404);
    });
  });

  contactRouter
    .route("/contacts/:contactId")
    .get((req, res) => {
      return res.json(req.contact);
    })
    .put((req, res) => {
      const { contact } = req;

      contact.name = req.body.name;
      contact.email = req.body.email;

      if (req.body.phone) {
        contact.phone.mobile = req.body.phone.mobile;
        contact.phone.work = req.body.phone.work;
      }

      req.contact.save(err => {
        if (err) {
          return handleError(res, err, "Failed to get contact Information");
        }

        return res.json(contact);
      });
    })
    .patch((req, res) => {
      const { contact } = req;

      if (req.body._id) {
        delete req.body._id;
      }

      Object.entries(req.body).forEach(item => {
        const key = item[0];
        const value = item[1];

        contact[key] = value;
      });

      req.contact.save(err => {
        if (err) {
          return handleError(res, err, "Failed to get contact Information");
        }

        return res.json(contact);
      });
    })
    .delete((req, res) => {
      req.contact.remove(err => {
        if (err) {
          return handleError(res, err, "Failed to get contact Information");
        }

        return res.sendStatus(204);
      });
    });

  // Generic error handler used by all endpoints.
  function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ error: message });
  }

  return contactRouter;
}

module.exports = routes;
