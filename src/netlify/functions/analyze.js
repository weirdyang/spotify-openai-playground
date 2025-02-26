import { analyzeUserProfile } from '../../js/function';
const headers = {
  /* Required for CORS support to work */
  'Access-Control-Allow-Origin': '*',
  /* Required for cookies, authorization headers with HTTPS */
  'Access-Control-Allow-Credentials': true
}

exports.handler = async function ({ queryStringParameters }) {
  const { q: username } = queryStringParameters;

  try {
    const userData = await analyzeUserProfile(username);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(userData, null, 2)
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(
        {
          error: 'whoops'
        }, null, 2
      )
    }
  }
}