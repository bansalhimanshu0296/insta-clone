import Post from "./Post"

const posts =[{
    id: "123",
    username: "hhhhimmmm",
    userImg: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    img: "https://links.papareact.com/3ke",
    caption: "vhhvhvvhhvhchcchhcchhc"
},
{
    id: "1234",
    username: "hhhhimmmm",
    userImg: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    img: "https://links.papareact.com/3ke",
    caption: "vhhvhvvhhvhchcchhcchhc"

}]
function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post key = {post.id} id = {post.id}
                username = {post.username}
                userImg = {post.userImg}
                img = {post.img}
                caption = {post.caption}/>

            ))}
        </div>
    )
}

export default Posts
