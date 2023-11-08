export const isCheck = (array, color) => {
    return array.some((col) => col.id === color.id)
}