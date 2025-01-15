import clsx from "clsx"
import Layout from "@theme/Layout"
import styles from "./../index.module.css"
import Iframe from "../../components/Iframe"
import { Button, Col, Collapse, ConfigProvider, Flex, Input, InputNumber, Row, Select } from "antd"
import { useState } from "react"

const worldList = [
	{
		value: 'minecraft_overworld',
		label: 'BuildWorld',
		min: -35000,
		max: 35000
	},
	{
		value: 'minecraft_the_nether',
		label: 'Nether',
		min: -10000,
		max: 10000
	},
	{
		value: 'minecraft_the_end',
		label: 'TheEnd',
		min: -10000,
		max: 10000
	},
]

export default function MapPage() {

	const path = 'https://map.lamalia.net/'

	const initState = {
		world: worldList[0].value,
		xAxis: 0,
		yAxis: 0
	}
	const [state, setState] = useState(initState)

	const items = [
		{
			key: '1',
			label: 'Coordinate X, Z',
			children: <MapCustomValue state={state} setState={setState} />,
		}
	]

	return (
		<ConfigProvider
			theme={{
				components: {
					Collapse: {
						headerBg: '#ffffff'
					},
				},
			}}>

			<Layout>
				<main>
					<header className={clsx("hero hero--black", styles.heroBanner)}>
						<div className="container">
							<span className="content">
								<h2>Map</h2>
								{/* <Flex justify="center">
									<Col md={18} xs={20}>
										<Collapse items={items}
											defaultActiveKey={1}	//เดี๋ยวมาเอาออก
										/>
									</Col>
								</Flex> */}

								<Iframe
									src={path}
									title="Lamalia Map"
									style={{ marginTop: '1em' }}
								></Iframe>
							</span>
						</div>
					</header>
				</main>
			</Layout>
		</ConfigProvider>
	)
}

function MapCustomValue() {
	return (
		<Row justify="center" gutter={{
			xs: 8,
			sm: 16,
			md: 24,
			lg: 32,
		}}>
			<Col span={6} >
				<InputNumber placeholder="x-Axist"
					style={{ width: '100%' }}
					max={1000} />
			</Col>
			<Col span={6}>
				<InputNumber placeholder="y-Axist"
					style={{ width: '100%' }}
					max={1000} />
			</Col>
			<Col span={6}>
				<Select
					options={worldList.map(({ value, lable }) => ({ value, lable }))}
					style={{ width: '100%' }}
				/>
			</Col>
		</Row>
	)
}
