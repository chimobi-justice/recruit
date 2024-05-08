import { useState, useRef, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import { Flex, Space, Typography, Grid } from "antd"
import {
  AlignRightOutlined,
  CloseOutlined,
  FolderOpenOutlined,
  HomeOutlined
} from "@ant-design/icons"

const { Title } = Typography;

const { useBreakpoint } = Grid;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const boxRef = useRef<HTMLDivElement>(null)

  const { lg } = useBreakpoint();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    } 

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClick = () => {
    setIsOpen((open) => !open);
  }

  return (
    <>
      <Flex align="center" justify="space-between">
        <div>
          <Title level={2} style={{ fontSize: lg ? '30px' : '22px', marginBottom: '0px' }}><Link to="/" style={{ color: 'black' }}>Recruit</Link></Title>
        </div>

        <div className="lg:block hidden">
          <Space direction="horizontal" size="large">
            <NavLink to="/" className="text-black"><HomeOutlined /> Home</NavLink>
            <NavLink to="/jobs" className="text-black"><FolderOpenOutlined /> Jobs</NavLink>
          </Space>
        </div>

        {!isOpen && (
          <div className="block lg:hidden h-full" onClick={handleClick}>
            <AlignRightOutlined className="text-3xl cursor-pointer" />
          </div>
        )}

        {isOpen && (
          <div className="block lg:hidden h-full" onClick={handleClick}>
            <CloseOutlined className="text-3xl cursor-pointer" />
          </div>
        )}
      </Flex>

      {isOpen && (
        <div ref={boxRef} className="bg-blue-800 absolute top-16 inset-x-0 w-full h-auto py-5 z-10 text-center transition-all duration-100 ease-in-out delay-200">
          <ul className="my-10">
            <li>
              <Link to="/" className="text-black text-2xl text-white active:text-white"><HomeOutlined /> Home</Link>
            </li>

            <li>
              <Link to="/jobs" className="text-black text-2xl text-white active:text-white"><FolderOpenOutlined /> Jobs</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default NavBar;