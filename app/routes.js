//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Logging session data  

router.use((req, res, next) => {
    const log = {
        method: req.method,
        url: req.originalUrl,
        data: req.session.data
    }
    console.log(JSON.stringify(log, null, 2))

    next()
})

// routes for Outcome reason page
router.post('/additional-outcomes', function (req, res) {
    var outcomeReasonVar = req.session.data['outcomeReason']
    if (outcomeReasonVar == "Full disallowance") {
        res.redirect('Vep-ca-mi-alerts/outcomes/full-disallowance')
    } if (outcomeReasonVar == "Partial disallowance") {
        res.redirect('Vep-ca-mi-alerts/outcomes/partial-disallowance')
    }
    if (outcomeReasonVar == "outstandingCAU") {
        res.redirect('Vep-ca-mi-alerts/outcomes/outstanding-action-outcome')
    }
    if (outcomeReasonVar == "no-action-outcome") {
        res.redirect('Vep-ca-mi-alerts/outcomes/no-action-outcome')
    }
})

// routes for Full disallowance reason page
router.post('/full-disallowance', function (req, res) {
    res.redirect('Vep-ca-mi-alerts/outcomes/payment-type')
})

// routes for Full disallowance reason page
router.post('/partial-disallowance', function (req, res) {
    res.redirect('Vep-ca-mi-alerts/outcomes/payment-type')
})

// routes for payment type selection page
router.post('/payment-type', function (req, res) {
    var paymentTypeVar = req.session.data['paymentType']
    if (paymentTypeVar == "Overpayment") {
        res.redirect('Vep-ca-mi-alerts/outcomes/overpayment-details')
    } if (paymentTypeVar == "Underpayment") {
        res.redirect('Vep-ca-mi-alerts/outcomes/underpayment-details')
    }
    if (paymentTypeVar == "Underpayments and overpayments") {
        res.redirect('Vep-ca-mi-alerts/outcomes/overpayment-details')
    }
})

///////// routes for overpayment page ////////
// routes for overpayment amount page selection page
router.post('/overpayment-details', function (req, res) {
    var errorTypeVar = req.session.data['errorType']
    if (errorTypeVar == "Official error") {
        res.redirect('Vep-ca-mi-alerts/outcomes/total-overpayments-summary')
    } else {
        res.redirect('Vep-ca-mi-alerts/outcomes/overpayment-amount-recovery')
    }
})

// routes for overpayment amount recovery selection page
router.post('/overpayment-amount-recovery', function (req, res) {
    res.redirect('Vep-ca-mi-alerts/outcomes/overpayment-civil-penalty')
})

// routes for overpayment check your answer page
router.post('/overpayment-civil-penalty', function (req, res) {
    res.redirect('Vep-ca-mi-alerts/outcomes/total-overpayments-summary')
})

///////// routes for underpaymemnt page ////////

// routes for underpayment check your answer page
router.post('/underpayment-details', function (req, res) {
    res.redirect('Vep-ca-mi-alerts/outcomes/total-underpayments-summary')
})



// routes for Outstanding action in CAU reason page
router.post('/outstanding-action-outcome', function (req, res) {
    res.redirect('Vep-ca-mi-alerts/outcomes/outcome-reason-summary')
})

// routes for No action in CAU reason page
router.post('/no-action-outcome', function (req, res) {
    res.redirect('Vep-ca-mi-alerts/outcomes/no-action-outcome-summary')
})



module.exports = router
