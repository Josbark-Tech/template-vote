import axios from "axios";

export default async function CheckPaymentStatus(orderNumber) {
  // const fetchOrTimeout = await Promise.race([
  //   axios.get("https://backend.flexpay.cd/api/rest/v1/check/" + orderNumber, {
  //     headers: {
  //       Authorization:
  //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzQ2MTg4NDU1LCJzdWIiOiJmYWRhOTA5MDVmY2EzNDA1OWQzMmFjOWQ1ZWY3MWY1OCJ9.wQyYxNDRQlGPos8oIXrv1E3fJ3DoYWRYI6OQt_AszAc",
  //     },
  //   }),
   


  const response = await axios.get('https://backend.flexpay.cd/api/rest/v1/check/'+orderNumber,{
    headers: {
      Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJcL2xvZ2luIiwicm9sZXMiOlsiTUVSQ0hBTlQiXSwiZXhwIjoxNzQ2MTg4NDU1LCJzdWIiOiJmYWRhOTA5MDVmY2EzNDA1OWQzMmFjOWQ1ZWY3MWY1OCJ9.wQyYxNDRQlGPos8oIXrv1E3fJ3DoYWRYI6OQt_AszAc"
    }
  });

  return response;
  //return response.data.transaction.status;
  
}