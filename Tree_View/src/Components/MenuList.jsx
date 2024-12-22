import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
    return (
        <>
        <ul>
            {(list?.length) ? list.map((Item) => (
                <MenuItem item={Item} />
            )): null
            }
        </ul>
        </>
    )
}