/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNursingCare = /* GraphQL */ `
  query GetNursingCare($id: ID!) {
    getNursingCare(id: $id) {
      id
      no
      date
      timeSlot
      location
      motherMilkTimesPerDay
      motherMilkInterval
      formulaFrequency
      formulaAmount
      pumpedMilkFrequency
      pumpedMilkAmount
      weaningFood
      bowelMovements
      urineFrequency
      childDevelopment
      breastRightType
      breastLeftType
      nippleShieldUse
      breastPumpUse
      postpartumDay
      breastStatus
      painStatus
      breastfeedingPosture
      familySupport
      weanDate
      sNote
      pNote
      breastDiagnosis
      paymentMethod
      paymentDetail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNursingCares = /* GraphQL */ `
  query ListNursingCares(
    $filter: ModelNursingCareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNursingCares(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        no
        date
        timeSlot
        location
        motherMilkTimesPerDay
        motherMilkInterval
        formulaFrequency
        formulaAmount
        pumpedMilkFrequency
        pumpedMilkAmount
        weaningFood
        bowelMovements
        urineFrequency
        childDevelopment
        breastRightType
        breastLeftType
        nippleShieldUse
        breastPumpUse
        postpartumDay
        breastStatus
        painStatus
        breastfeedingPosture
        familySupport
        weanDate
        sNote
        pNote
        breastDiagnosis
        paymentMethod
        paymentDetail
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
