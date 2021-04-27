try{
  const req = require.context('../../assets', true, /\.svg$/);
  req.keys().forEach((filename) => req(filename));
}catch (error){

}

