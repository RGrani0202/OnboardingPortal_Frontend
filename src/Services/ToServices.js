const CreateItem = () => {
    let api = process.env.REACT_APP_POST_ITEM;
    const [description, setdescription] = useState("");
    const [url, seturl] = useState("");
    try {
        //pass items to store in database
        axios.post(api, {
            descrption: description,
            url: url
        }, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((response) => {
            console.log("created");
            alert("Item Created");
        });

    } catch (err) {
        console.log(err);
    }
}
export default CreateItem;