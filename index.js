require('dotenv').config()

const express = require("express")
const app = express()

const port = process.env.PORT || 3000

const gitData = {
  "login": "Samcxx11",
  "id": 149511618,
  "node_id": "U_kgDOCOldwg",
  "avatar_url": "https://avatars.githubusercontent.com/u/149511618?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Samcxx11",
  "html_url": "https://github.com/Samcxx11",
  "followers_url": "https://api.github.com/users/Samcxx11/followers",
  "following_url": "https://api.github.com/users/Samcxx11/following{/other_user}",
  "gists_url": "https://api.github.com/users/Samcxx11/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Samcxx11/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Samcxx11/subscriptions",
  "organizations_url": "https://api.github.com/users/Samcxx11/orgs",
  "repos_url": "https://api.github.com/users/Samcxx11/repos",
  "events_url": "https://api.github.com/users/Samcxx11/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Samcxx11/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Samarth Ralph",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 3,
  "following": 3,
  "created_at": "2023-10-31T15:03:04Z",
  "updated_at": "2026-08-09T09:22:30Z"
}
app.get('/' , (req,res)=>{
    res.send("Hello World!!")
})

app.get('/login' , (req,res)=>{
    res.send("Welcome User")
})

app.get('/github', (req,res)=>{
    res.json(gitData)
})


app.listen(process.env.PORT , ()=>{
    console.log(`app is listining to ${port}`)
})
