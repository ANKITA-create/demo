import React,{ useState,useEffect} from 'react'
import firebaseDb from '../firebase';
import {storage} from '../firebase';
import {Container,FormButton2} from './CResident';

// const initialFieldValues = {
//  unknu
//  image: '',
//  temperature: ''
// }



class Notify extends React.Component {

    constructor(props) {

      super(props);
      this.state = {
        // image: null,
        Img_Link: '',
        url:'',
        name: '',
        temperature: '',
        timestamp: '',
        nav: ''
                
        // progress: 0
      }
          this.handleChange = this.handleChange.bind( this );
          // this.handleAllow = this.handleAllow.bind( this );
          // this.handleDeny = this.handleDeny.bind( this );
      
    }


    
//  const [values,setValues] = useState(initialFieldValues)

//    const handleInputChange = e => {
//    const { name , value } = e.target;
//    setValues(
//    {
//      ...values,
//      [name]:value
//    })

//  }
// }


  // 
  handleRetrieve = () => {
        // complete function ...
       // var
        firebaseDb.ref('Request').on('value',function(snapshot) {
          document.getElementById('nav').src = snapshot.val()?.Img_Link;
        })
      } 
        
       

        handleChange(e) {
          this.setState({
            nav: e.target.value,
            // name: e.target.value,
            // temperature: e.target.value,
            // timestamp: e.target.value

        });
        }

      


  
  componentDidMount() {
      firebaseDb.ref('Request')
        .once('value')
        .then(snapshot => {
        
        var name = snapshot.val().Name;
        
        var temperature = snapshot.val().Temperature;
        var timestamp = snapshot.val().Timestamp;
        
        
      

      document.getElementById("name").innerHTML =name;
      document.getElementById("temperature").innerHTML =temperature;
      document.getElementById("timestamp").innerHTML =timestamp;
      
       

      



    });
}

    
          
 


  render(){
        const style = {
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft: 'auto',
          justifyContent: 'center'

    };

  return ( 
    <>
      <Container>
      
      
          <FormButton2
          onClick={this.handleRetrieve}
          
          
        >
          Click here
        </FormButton2>
        <br />
        <br />
        
        <img id="nav"

          src={this.state.nav || 'https://via.placeholder.com/400x300'}
          // alt="Uploaded Images"
          height="300"
          width="400"
          onChange={ this.handleChange } value={ this.state.nav }
        />
        
          
      <p>Name: <strong id="name" onChange={ this.handleChange } value={ this.state.name }></strong></p>
      <p>Temperature: <strong id="temperature" onChange={ this.handleChange } value={ this.state.temperature }></strong></p>
      <p>Timestamp: <strong id="timestamp" onChange={ this.handleChange } value={ this.state.timestamp }></strong></p>
      
    
    
    </Container>
  </>
)
}
};

export default Notify;