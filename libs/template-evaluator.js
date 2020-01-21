// A template for writing functions to evaluate
// eligibility.
// Note: specific charges can be passed for rules that
// apply at the charge level

function templateEvaluator(caseData, chargeData) {
  // Using the case data, we can, for example
  // evaluate if a charge is a conviction.
  console.log("Is conviction: ", chargeData.isConviction);

  return {
    indicator: chargeData.isConviction ? "elligible" : "inelligible",
    message: "Template evaluation"
  };
}

export default chainAllDeterminations;

// additional example implementations of evaluation methods

function isOtherThanBRA(state) {
  let isBra = state.case.charges.map(charge =>
    charge.isBRAFelony ? true : false
  );
  let braArr = [];
  state.case.charges.forEach(charge => {
    if (charge.isBRAFelony) {
      braArr.push(charge);
    }
  });
  if (!braArr[0]) {
    isAConviction(state);
  } else {
    let conArr = braArr.map(charge => (charge.isConvicted ? true : false));

    conArr.includes(true)
      ? printResult(
          "eligible",
          "the 16- 803 analysis for eligible misdemeanors"
        )
      : printResult(
          "NOT ELIGIBLE",
          "use the 16-803 analysis for ineligible misdemeanors"
        );
  }
}

function isAConviction(state) {
  if (state.case.isConvicted) {
    printResult(
      "NOT ELIGIBLE",
      "felony convictions other than for BRA are never eligible"
    );
  }
}

function isCasePapered(state) {
  let paperArr = state.case.map(charge => (charge.isPapered ? true : false));

  if (paperArr.includes(true)) {
  } else {
  }
}

function fourYearsSinceOffPapers(state) {
  let paperYear = parseInt(state.case.dispositionDate.split("-")[2]);
  let today = new Date().getFullYear();
  let diff = today - year;
}

function printResult(valid, message) {
  console.log(valid, message);
}

// let state = {
//   evaluatorName: "Name Nameford Esquire",
//   evaluatorComments: "Some advice to the client",
//   client: {
//     dob: "01-01-1990",
//     isOnProbation: true,
//     name: "Name Namington",
//     pdId: "xyz-123",
//     pendingCases: [{ offense: "22–3225.03a Misdemeanor insurance fraud" }]
//   },
//   case: {
//     id: "docket-XXX-abc-123",
//     isConvicted: false,
//     terminationDate: "02-03-2019",
//     charges: [
//       {
//         classification: "felony",
//         dispositionDate: "01-01-2019",
//         description: "a crime",
//         isBRAFelony: true,
//         isConvicted: true,
//         isPapered: true,
//         offense: "22-401"
//       },
//       {
//         classification: "misdemeanor",
//         description: "a different crime",
//         dispositionDate: "01-01-2019",
//         isBRAFelony: true,
//         isConvicted: false,
//         isPapered: true,
//         offense: "22–3225.03a Misdemeanor insurance fraud"
//       }
//     ]
//   }
// };

// function anyConvictions(caseData){

//   Object.keys(caseData.case.charges).map((charge)=>{
//     let chargeObj = caseData.case.charges[charge]
//     if (chargeObj.isConvicted === true){
//       return true
//     }
//   })
//   return false
// }
