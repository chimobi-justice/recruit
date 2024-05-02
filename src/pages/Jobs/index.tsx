import React from "react"
import type { CheckboxProps, MenuProps } from "antd"
import { Row, Col, Tag, Menu, Checkbox } from "antd"
import { AppstoreOutlined, DownCircleOutlined } from "@ant-design/icons"
import { getMenuItems } from "../../helpers"
import AllJobs from "./allJobs"

const Job: React.FunctionComponent = () => {
  const handleCheckboxChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('clicking..', e)
  }

  return (
    <section className="w-11/12 mx-auto">
      <Row gutter={16}>
        <Col span={4}>
          <div>
            <Tag icon={<DownCircleOutlined />} >filter</Tag>

            <div>
              <Menu
                onClick={onClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={[
                  getMenuItems('Category', 0, <AppstoreOutlined />, [
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>Software Developer</Checkbox>, 1),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>Customer Service</Checkbox>, 2),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>Design</Checkbox>, 3),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>Marketing</Checkbox>, 4),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>Data Analysis</Checkbox>, 5),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>DevOps / Sysadmin</Checkbox>, 6),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>Human Resources</Checkbox>, 7),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>QA</Checkbox>, 8),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>Writing</Checkbox>, 9),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>All others</Checkbox>, 10),
                  ]),
                  getMenuItems('Job Types', 11, <AppstoreOutlined />, [
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>Full Time</Checkbox>, 12),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>Part Time</Checkbox>, 13),
                    getMenuItems(<Checkbox onChange={handleCheckboxChange}>Contract</Checkbox>, 14),
                  ]),
                ]}
              />
            </div>
          </div>
        </Col>

        <Col span={20}>
          <div>
            <AllJobs />
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Job;