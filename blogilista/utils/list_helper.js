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
    const authors = blogs.map(name => name = name.author)
    const result = []

    for (i=0; i<authors.length; i++) {
        const temp = result.map(name => name = name.author)

        if (!temp.includes(authors[i])) {
        result.push({ author: authors[i], likes: 1 })
        }
        else {
            const index = temp.findIndex(name => name == authors[i])
            result[index] = {author: result[index].author, likes: result[index].likes+1}
        }
    }

    console.log(authors, result)
    return  result.reduce((prev,curr) => {
       return (prev.likes > curr.likes) ? prev : curr
    })
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}