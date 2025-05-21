module.exports = {

  // Insert values here
  "overpayment": [
    {
      overpaymentAmount: "£2000",
      errorType: "Official error"
    },
    {
      overpaymentAmount: "5000",
      errorType: "Customer error",
      amountRecoverable: "£1800",
      amountNotRecoverable: "£400",
      civilPenaltyApplied: "yes"
    }
  ],
  "underPayment": [
    {
      underPaymentAmount: "£2000",
      errorType: "Official error"
    },
    {
      underPaymentAmount: "5000",
      errorType: "customer error"
    }
  ]


}
