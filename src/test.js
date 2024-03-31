arr = [
  {
    title: 'Lập Trình JavaScript Cơ Bản',
    description: 'Là ngôn ngữ tương tác với trình duyệt',
    level: 'Cơ bản',
    slug: 'lap-trinh-javascript-co-ban',
    videoID: '0SJE9dYdpps',
    deleted: true,
  },
  {
    deleted: false,
    title: 'Lập Trình JavaScript Nâng Cao',
    description: 'Là ngôn ngữ tương tác với trình duyệt',
    level: 'Nâng Cao',
    slug: 'lap-trinh-javascript-nang cao',
    videoID: 'MGhw6XliFgo',
  },
  {
    deleted: false,
    title: 'HTML CSS từ Zero đến Hero',
    description: 'Học về xây dựng Website',
    videoID: 'R6plN3FvzFY',
    level: 'Cơ bản',
    slug: 'html-css-tu-zero-den-hero',
    __v: 0
  }
]

arr.filter((course) => {return course.deleted === false});
console.log(arr);