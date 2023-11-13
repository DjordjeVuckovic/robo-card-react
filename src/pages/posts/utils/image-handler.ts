const AVATAR_URL = 'https://robohash.org/'
export function findAvatarImage(){
    return `${AVATAR_URL}/${Math.random()}.png`
}