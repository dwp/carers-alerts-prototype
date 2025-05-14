//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// // Logging session data  

// router.use((req, res, next) => {
//     const log = {
//         method: req.method,
//         url: req.originalUrl,
//         data: req.session.data
//     }
//     console.log(JSON.stringify(log, null, 2))

//     next()
// })
// // Add your routes here

// // This tells the prototype to run this script after the 'question-page-url' page
// router.post('/additional-outcomes', function (req, res) {
//     // This tells it to refer to the element with the name 'elementName'
//     var outcomeReasonVar = req.session.data['outcomeReason']
//     // This checks whether the variable matches a ‘value’ from the form
//     if (outcomeReasonVar == "full-disallowance") {
//         // And if the condition is true, it tells the prototype where to go next
//         res.redirect('/full-part-disallowance')
//         // If this isn’t true, this checks to see if the variable matches a different ‘value’
//         // } if (outcomeReasonVar == "value2") {
//         //     // And if the new condition is true, it tells the prototype where to go next
//         //     res.redirect('/destination-url-2')
//         //     // And if it doesn’t match any of the values you’ve specified
//         // } else {
//         //     // This tells the prototype where to go 
//         //     res.redirect('/destination-url-3)
//     }
// })

module.exports = router