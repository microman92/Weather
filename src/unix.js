function unix(dt, type) {
    const seconds = dt * 1000
    const data = new Date(seconds)
    let result =
        type == 'day' ? data.toLocaleString('ru-Ru', { day: 'numeric' }) :
            type == 'mounth' ? data.toLocaleString('ru-Ru', { month: 'long' }) :
                type == 'weekDay' ? data.toLocaleString('ru-Ru', { weekday: 'long' }) : ''
    return result
}
export default unix
