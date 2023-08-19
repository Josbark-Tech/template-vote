import axios from "axios";

export default async function PaymentMethod(phone, amount, reference){
  
  const datajson = {
    "phone" : '243'+phone,
    "amount" : amount,
    "currency" : "CDF",
    "merchant" : "JOSBARK",
    "reference" : reference,
    "type" : "1",
    "callbackUrl" : "https://backend.flexpay.cd/api/rest/"
  }
  const data = await axios.post('https://backend.flexpay.cd/api/rest/v1/paymentService', {
    phone : datajson.phone,
    amount : datajson.amount,
    reference : datajson.reference,
    currency : datajson.currency,
    merchant : datajson.merchant,
    type : datajson.type,
    callbackUrl : datajson.callbackUrl,
  },{
    headers: {
      Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzQ2MTg4NDU1LCJzdWIiOiJmYWRhOTA5MDVmY2EzNDA1OWQzMmFjOWQ1ZWY3MWY1OCJ9.wQyYxNDRQlGPos8oIXrv1E3fJ3DoYWRYI6OQt_AszAc"
    }
  });

  return data;
}