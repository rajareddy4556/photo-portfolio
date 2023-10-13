import React from 'react';
function fun(){
    return(
        <div>
            <div className="container1" id='s1'>
                <div className='container2'>
                    <img src='https://www.w3schools.com/w3images/photographer.jpg' height={600} width={1500} alt='hey' ></img>
                </div>
                <div className='container3'>
                    <h1>&nbsp;&nbsp;JANE DOE</h1>
                    <h2>PHOTOGRAPHER</h2>
                </div>
                <div className='container4'>
                    <ul className='lis-items'>
                        <li><a href='#s1'>Home</a></li>
                        <li><a href='#s2'>Portfolio</a></li>
                        <li><a href='#f1'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='photos' id='s2'>
                <img src='https://www.w3schools.com/w3images/ocean.jpg' alt='im1'></img>
                <img src='https://www.w3schools.com/w3images/ocean2.jpg' alt='im2'></img>
                <img src='https://www.w3schools.com/w3images/falls2.jpg' alt='im3'></img>
                <img src='https://www.w3schools.com/w3images/mountainskies.jpg' alt='im4'></img>
                <img src='https://www.w3schools.com/w3images/mountains2.jpg' alt='im5'></img>
            </div>
            <div className='form-data' id='f1'>
                <center><p id='head1'>Contact</p></center>
                <form className='form1'>
                    <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus.</p>
                    <label for="name">Name<br/></label>
                    <input type='text' name='name' required></input>
                    <label for="email">Email<br/></label>
                    <input type='email' name='email' required></input>
                    <label for="message">Message<br/></label>
                    <input type='text' name='message' required></input>
                    <button type='submit' id='sub'>Send</button>
                    <p><br/></p>
                    <p>Powered by <span><a href='w3.css' id='jk'>w3.css</a></span></p>
                    
                    <p><br/></p>
                </form>

            </div>
        </div> 
    );
}
export default fun;