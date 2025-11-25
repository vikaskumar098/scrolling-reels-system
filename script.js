const reels = [
  {
    username: "user_01",
    likeCount: 1200,
    isLiked: true,
    commentCount: 45,
    caption: "Enjoying the day 🌞",
    video: "/videos/dance.mp4",
    userProfile: "https://picsum.photos/200?random=1",
    shareCount: 12,
    isFollowed: true
  },
  {
    username: "user_02",
    likeCount: 980,
    isLiked: false,
    commentCount: 33,
    caption: "Riding vibes 🎵",
    video: "/videos/bike ride.mp4",
    userProfile: "https://picsum.photos/200?random=2",
    shareCount: 8,
    isFollowed: false
  },
  {
    username: "user_03",
    likeCount: 4550,
    isLiked: true,
    commentCount: 102,
    caption: "Hacking mode 🤤",
    video: "/videos/hvideo.mp4",
    userProfile: "https://picsum.photos/200?random=3",
    shareCount: 21,
    isFollowed: true
  },
  {
    username: "user_04",
    likeCount: 2100,
    isLiked: false,
    commentCount: 19,
    caption: "Nature snow love 🌿✨",
    video: "/videos/snow.mp4",
    userProfile: "https://picsum.photos/200?random=4",
    shareCount: 15,
    isFollowed: true
  },
  {
    username: "user_05",
    likeCount: 350,
    isLiked: false,
    commentCount: 9,
    caption: "Workout motivation 💪🔥",
    video: "/videos/realman.mp4",
    userProfile: "https://picsum.photos/200?random=5",
    shareCount: 3,
    isFollowed: false
  },
  {
    username: "user_06",
    likeCount: 5020,
    isLiked: true,
    commentCount: 88,
    caption: "Sunset shots 🌇😍",
    video: "/videos/ballon.mp4",
    userProfile: "https://picsum.photos/200?random=6",
    shareCount: 30,
    isFollowed: true
  },
  {
    username: "user_07",
    likeCount: 750,
    isLiked: false,
    commentCount: 14,
    caption: "Chill vibes 🎧",
    video: "/videos/astro.mp4",
    userProfile: "https://picsum.photos/200?random=7",
    shareCount: 6,
    isFollowed: false
  },
  {
    username: "user_08",
    likeCount: 1289,
    isLiked: true,
    commentCount: 52,
    caption: "Pet love 🐶❤️",
    video: "/videos/aniaml.mp4",
    userProfile: "https://picsum.photos/200?random=8",
    shareCount: 17,
    isFollowed: true
  },
  {
    username: "user_09",
    likeCount: 6800,
    isLiked: true,
    commentCount: 120,
    caption: "Nature loves ❤️",
    video: "/videos/nature.mp4",
    userProfile: "https://picsum.photos/200?random=9",
    shareCount: 41,
    isFollowed: true
  },
  {
    username: "user_10",
    likeCount: 300,
    isLiked: false,
    commentCount: 6,
    caption: "New day 😊",
    video: "/videos/man.mp4",
    userProfile: "https://picsum.photos/200?random=10",
    shareCount: 2,
    isFollowed: false
  }
];

var sum = " "

reels.forEach(function(elem){
    sum = sum + `  <div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class=" love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line">'}</i></h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                            <h6>40</h6>
                        </div>
                    </div>
                    

                    
                    
                </div>`
})

var allreels = document.querySelector('.all-reels')

allreels.innerHTML = sum