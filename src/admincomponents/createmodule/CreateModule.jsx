
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import "./CreateModule.css";
import AdminNavbar from '../AdminHomePage/AdminNavbar';
import axios from 'axios';


const CreateModule = () => {
    let apiTemplate = process.env.REACT_APP_GET_TEMPLATE;
    let apiModule = process.env.REACT_APP_POST_MODULE;
    const [templates, setTemplate] = useState([]);

    const [moduleName, setmoduleName] = useState("");
    const [moduleDescription, setmoduleDescription] = useState("");

    const [arraytemplate, setarraytemplate] = useState([]);


    useEffect(() => {
        axios.get(apiTemplate).then((response) => {
            console.log(response);
            setTemplate(response.data);
        });

    }, []);

    const handleChange = (event) => {

        console.log(event.target.checked)
        let name = event.target.value;
        console.log(name);

        if (event.target.checked === true) {
            // arraytemplate.push(event.target.value);
            setarraytemplate(current => [...current, name]);
            console.log(arraytemplate);

        }
        if (event.target.checked === false) {
            setarraytemplate(arraytemplate.filter(item => item !== name));
            // setarraytemplate(arraytemplate.filter(item => item !== event.target.value));
            console.log(arraytemplate);
        }
    }

    let handleSubmit = async (e) => {

        e.preventDefault();
        console.log("saved");
        try {
            //pass items to store in database
            axios.post(apiModule, {
                name: moduleName,
                description: moduleDescription,
                templates: arraytemplate,
            }, {
                headers: {
                    "Content-Type": 'application/json'
                }
            }).then((response) => {
                console.log("created");
                setmoduleName("");
                setmoduleDescription("");
                alert("Module created")
            });

        } catch (err) {
            console.log(err);
        }
    }

    const navigate = useNavigate();


    return (
        <div className='update'>
            <div>
                <AdminNavbar />
            </div>

            <Button variant="contained" className="createButton" onClick={() => navigate("/viewmodules")}>See Modules</Button>
            <div className='updatePage'>
                <div className='updateItem'>
                    <label className='updateLabel'>Module Name:</label>
                    <TextField
                        required
                        className='updateInput'
                        onChange={(e) => setmoduleName(e.target.value)}
                    />
                </div>
                <div className='updateItem'>
                    <label className='updateLabel'>Module Description:</label>
                    <TextField
                        required

                        className='updateInput'
                        onChange={(e) =>  setmoduleDescription(e.target.value)}
                    />
                </div>
                <ul className='updateItem'>
                            {templates.map(template => (
                                <li className='updateList' key={template.id}>
                                    <input type="checkbox"
                                        value={template.name}
                                        onChange={handleChange}
                                    />{template.name}
                                </li>
                            ))}
                        </ul>

                <Button variant="outlined" className='updateItem submitButton' onClick={handleSubmit}>
                    Create Module
                </Button>

            </div>
            


        </div>
    )
}
export default CreateModule;