import { useEffect, useState } from 'react'

function useActiveSection() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll("section");
            let current = "";
            sections.forEach((section) => {
                const top = section.offsetTop - 200;
                const height = section.offsetHeight;
                const id = section.getAttribute("id") || "";
                if (window.scrollY >= top && window.scrollY < top + height) {
                    current = id;
                }
            })
            setActiveSection(current)
        }

        const throttledScroll = () => {
            requestAnimationFrame(handleScroll);
        }

        handleScroll();

        window.addEventListener("scroll", throttledScroll);
        return () => window.removeEventListener("scroll", throttledScroll);
    }, [])
    return (
        { isScrolled, activeSection }
    )
}

export default useActiveSection