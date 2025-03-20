const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: true}));
app.post('/submit', (req,res) => {
        const formData = req.body;
        console.log(formData);
        res.render('pages/acceptFormData.hbs', {formData});  
})

const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));


//Function For Form Submission
function confirmationsubmission(){
    return confirm("Thank you! Are you sure you want to submit?");
  }
  
  //Function For Form Reset
  function confirmationreset(){
    return confirm("Thank you! Are you sure you want to reset?");
  }
  
  //Function To Mark Empty Boxes
  function empty(event){
    const input = event.target;
    if(input.value.trim() === ""){
      input.style.border = "2px solid red"
    } else {
      input.style.border = "2px solid green"
    }
  }
  