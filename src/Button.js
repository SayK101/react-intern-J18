function Button(propss){

    function removeB(){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#"+randomColor        
    }

    return (
        <div className="myName">
            <button onClick={removeB}>You can {propss.text} to button to Change color</button>
        </div>
    );
}

export default Button;