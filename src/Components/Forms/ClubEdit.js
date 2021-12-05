import React,{useState} from 'react';
import ReactDOM from 'react-dom'


const ClubEdit = () => {


        const [count, setCount] = useState(0);
        const [Str, setStr] = useState(`<textarea rows="2" type="text" class="form-control" id="achievements" name="achievements"></textarea><br id="br">`)

        // var loadFile = function (event) {
        //     var image = document.getElementById('output');
        //     image.src = URL.createObjectURL(event.target.files[0]);
        // };

        var add = () => {
            // let text=document.getElementById('achievements');
            let form = document.getElementById('main')
            var edit = `<textarea rows="2" type="text" class="form-control" id="achievements" name="achievements"></textarea><br id="br">`;
            setStr(edit + Str)
            setCount(count+1)
            // console.log(Str)
        }
        var remove = () => {
            var myobj = document.getElementById("achievements");
            myobj.remove();
            var brobj = document.getElementById("br");
            brobj.remove();
            var myobj2 = document.getElementById("danger");
            var edit = `<textarea rows="2" type="text" class="form-control" id="achievements" name="achievements"></textarea><br id="br">`;
            setCount(count-1)
            setStr(Array(count).join(edit))
            // console.log(myobj2)
        }

        var mountElement = document.getElementById('form');
// Third argument is the inner text
var newElement = React.createElement(`<textarea rows="2" type="text" class="form-control" id="achievements" name="achievements"></textarea><br id="br">`, null, "Text (as a string)");




    return (
        <div class="container mt-5 pt-5">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mt-5"
                style={{ 'font-family': 'Kaushan Script, cursive' }}>Edit  club name
            </h2>

            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>

            <form  id="form">
            
                <div class="form-group">
                    <label for="info">New Description</label>
                    <textarea rows="2" type="text" class="form-control" id="info"
                        name="description">club.description</textarea>
                </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16" id='add' onClick={add} >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-minus float-right" viewBox="0 0 16 16" id='remove' onClick={remove}>
                <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
            </svg>
                {/* <textarea rows="2" type="text" class="form-control" id="achievements" name="achievements"></textarea><br id="br"></br> */}
                <div id="danger" dangerouslySetInnerHTML={{ __html: Str}}></div>
    <div class="container mb-5">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
            </form >
            
            
        </div >


    )

    // return(<h1>hello</h1>)
    

};

export default ClubEdit;
