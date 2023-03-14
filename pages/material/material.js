Page({
  data: {
      icon: {
        "right": ["/asset/circle-green.png"],
        "right_filled": ['/asset/circle-green-filled.png'],
        "wrong": ["/asset/circle-red-filled.png"],
        "blank": ["/asset/circle-gray.png"]
      },
    
      correct_answer: [1,1,0,0],
      user_answer: [1,0,1,0],
      options: ['A','B','C','D']
  },
  onShow(e) {
  }
});