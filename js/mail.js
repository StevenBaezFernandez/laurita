Email.send({
    SecureToken : "766bda0c-4208-412d-8933-8009d9b20196",
    To : 'stevenbaezfernandez@gmail.com',
    From : "stevenbaezfernandez@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);