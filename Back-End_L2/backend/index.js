import express from "express";
const app = express();

// app.get('/',(req,res)=>{
//     res.send('server is rady');
// })

app.get('/api/jokes',(req, res)=>{
    const jokes = [
        {
            id: 1,
            title: "Programmer Joke",
            content: "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!"
        },
        {
            id: 2,
            title: "Math Joke",
            content: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
        },
        {
            id: 3,
            title: "Animal Joke",
            content: "Why don’t skeletons fight each other? They don’t have the guts."
        },
        {
            id: 4,
            title: "Food Joke",
            content: "Why did the tomato turn red? Because it saw the salad dressing!"
        },
        {
            id: 5,
            title: "Science Joke",
            content: "Why can’t you trust an atom? Because they make up everything!"
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`server at https://localhost:${port}`);
})