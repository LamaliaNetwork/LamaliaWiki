import clsx from "clsx"
import Layout from "@theme/Layout"
import styles from "./../index.module.css"
import Iframe from "../../components/Iframe"
import { Button, Col, Collapse, ConfigProvider, Flex, Input, InputNumber, Row, Select } from "antd"
import { useMemo, useState } from "react"

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

	const initState = {
		basePath: 'https://map.lamalia.net/',
		path: 'https://map.lamalia.net/',
		world: worldList[0].value,
		showIframe: true,
		xAxis: 0,
		zAxis: 0
	}
	const [state, setState] = useState(initState)

	const handleChangeState = (value, key) => {
		setState((prev) => ({
			...prev,
			[key]: value
		}))
	}

	const items = [
		{
			key: '1',
			label: 'Coordinate X, Z',
			children: <MapCustomValue state={state} handleChangeState={handleChangeState} />,
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
								<Flex justify="center">
									<Col md={18} xs={20}>
										<Collapse items={items}
											defaultActiveKey={1}	//เดี๋ยวมาเอาออก
										/>
									</Col>
								</Flex>
								{
									state.showIframe &&
									<Iframe
										src={state.path}
										title="Lamalia Map"
										style={{ marginTop: '1em' }}
									></Iframe>
								}
							</span>
						</div>
					</header>
				</main>
			</Layout>
		</ConfigProvider>
	)
}

function MapCustomValue({ state, handleChangeState }) {
	const worldData = useMemo(() => {
		return worldList.find((el) => el.value === state.world)
	}, [state.world])

	const handleClickGo = () => {
		const newPath = `${state.basePath}/?world=${state.world}&zoom=3&x=${state.xAxis}&z=${state.zAxis}`
		handleChangeState(newPath, 'path')
	}

	return (
		<Row
			justify="center"
			gutter={{
				xs: 8,
				sm: 16,
				md: 24,
				lg: 32,
			}}
			style={{ marginTop: '1rem'}}
		>
			<Col span={6}>
				<InputNumber
					placeholder="x-Axis"
					style={{ width: '100%' }}
					max={worldData?.max || 1000}
					min={worldData?.min || -1000}
					onChange={(e) => handleChangeState(e, 'xAxis')}
				/>
			</Col>
			<Col span={6}>
				<InputNumber
					placeholder="z-Axis"
					style={{ width: '100%' }}
					max={worldData?.max || 1000}
					min={worldData?.min || -1000}
					onChange={(e) => handleChangeState(e, 'zAxis')}
				/>
			</Col>
			<Col span={6}>
				<Select
					options={worldList.map(({ value, label }) => ({ value, label }))}
					style={{ width: '100%' }}
					defaultValue={state.world}
					onChange={(value) => handleChangeState(value, 'world')}
				/>
			</Col>
			<Col>
				<Button onClick={handleClickGo}>Go!</Button>
			</Col>
		</Row>
	)
}