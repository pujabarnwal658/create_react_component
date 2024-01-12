function Hello() {

  let myName = 'Prashant';
  let number = 456;

  let fullName =  () => {
    return 'Prashant Jain';
  }

  return <h3>
    MessageNo : {Number} I am your master {fullName()}
  </h3>
}

export default Hello;