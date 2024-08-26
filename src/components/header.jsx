function Header() {
    return (
        <div className="flex items-center space-x-3 absolute left-0 top-0 p-4 text-white text-4xl">
            <div>ToDo</div>
            <img
                src="/assets/checkbox.png" alt="checkbox"
                style={{ width: '50px', height: '50px' }}
            />
        </div>
    )
}

export default Header;