const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const total = blogs.reduce((sum, order) => {
  //  console.log(sum, order.likes)
      return sum + order.likes        
    }, 0)
 //   console.log(total)
    return total
}

const favoriteBlog = (blogs) => {
    
    if (blogs.length > 0) {
        const result = blogs.reduce((previous, current) => {
            return (previous.likes > current.likes) ? previous : current
            })
            return {        
                title : result.title,
                author: result.author,
                likes: result.likes
            }
    }
    else return undefined
}

const mostBlogs = (blogs) => {
    const result = a

}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}