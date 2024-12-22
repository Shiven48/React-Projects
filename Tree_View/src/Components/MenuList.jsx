import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
    return (
        <>
        <ul className="list-none mt-0 mb-0">
            {(list?.length) ? list.map((Item) => (
                <MenuItem item={Item} />
            )): null
            }
        </ul>
        </>
    )
}