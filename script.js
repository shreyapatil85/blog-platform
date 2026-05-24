async function addBlog(){

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    await fetch("http://localhost:5000/addBlog",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title,
            content
        })
    });

    alert("Blog Added");
}