import clsx from "clsx"
import Layout from "@theme/Layout"
import styles from "./../index.module.css"
import Iframe from "../../components/Iframe"
import { Button, Col, Collapse, ConfigProvider, Flex, Input, InputNumber, Row, Select, Tag } from "antd"
import { HeartTwoTone } from '@ant-design/icons'

import { useMemo, useState } from "react"

const worldList = [
	{
		value: 'minecraft_overworld',
		label: 'OverWorld',
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

	const [favList, setFavList] = useState([
		{ name: 'OldSpawn', world: 'minecraft_overworld', xAxis: 0, zAxis: 0 },
		{ name: 'LMEGrandStation', world: 'minecraft_the_nether', xAxis: -40, zAxis: 70, zoom: 4 },
		{ name: 'Wanted!', world: 'minecraft_overworld', xAxis: -4870, zAxis: -2040, zoom: 5 },
	])

	const handleClickGo = ({ world, xAxis, zAxis, zoom = 3 }) => {
		world = world || state.world
		xAxis = xAxis || state.xAxis
		zAxis = zAxis || state.zAxis
		const newPath = `${state.basePath}/?world=${world}&zoom=${zoom}&x=${xAxis}&z=${zAxis}`
		handleChangeState(newPath, 'path')
	}

	const handleClickFav = ({ name, world, xAxis, zAxis, zoom }) => {
		handleChangeState(xAxis, 'xAxis')
		handleChangeState(zAxis, 'zAxis')
		handleChangeState(world, 'world')
		handleClickGo({ world, xAxis, zAxis, zoom })
	}

	const handleAddFavList = () => {
		setFavList((prev) => ([
			...prev,
			{
				name: state.world + state.xAxis + state.zAxis,
				world: state.world,
				xAxis: state.xAxis,
				zAxis: state.zAxis,
			}
		]))
	}

	const handleDelFav = (favToDelete) => {
		setFavList((prev) =>
			prev.filter(
				(fav) =>
					fav.name !== favToDelete.name ||
					fav.world !== favToDelete.world ||
					fav.xAxis !== favToDelete.xAxis ||
					fav.zAxis !== favToDelete.zAxis ||
					fav.zoom !== favToDelete.zoom
			)
		)
	}


	return (
		<>
			<Row
				justify="center"
				gutter={{
					xs: 8,
					sm: 16,
					md: 24,
					lg: 32,
				}}
				style={{ marginTop: '1rem' }}
			>
				<Col span={6}>
					<InputNumber
						placeholder="x-Axis"
						style={{ width: '100%' }}
						max={worldData?.max || 1000}
						min={worldData?.min || -1000}
						onChange={(e) => handleChangeState(e, 'xAxis')}
						value={state.xAxis}
					/>
				</Col>
				<Col span={6}>
					<InputNumber
						placeholder="z-Axis"
						style={{ width: '100%' }}
						max={worldData?.max || 1000}
						min={worldData?.min || -1000}
						onChange={(e) => handleChangeState(e, 'zAxis')}
						value={state.zAxis}
					/>
				</Col>
				<Col span={6}>
					<Select
						options={worldList.map(({ value, label }) => ({ value, label }))}
						style={{ width: '100%' }}
						value={state.world}
						onChange={(value) => handleChangeState(value, 'world')}
					/>
				</Col>
				<Col>
					<Button onClick={handleClickGo}>Go!</Button>
					<Button
						onClick={handleAddFavList}
						icon={<HeartTwoTone />}
						style={{ marginLeft: '0.5rem' }}
					/>
				</Col>
			</Row>
			<Row>
				<div style={{ margin: '1rem' }}>
					{favList.map((fav, index) =>
						<Tag
							color="purple"
							closeIcon
							onClick={(e) => { e.preventDefault(); handleClickFav(fav) }}
							onClose={(e) => { e.preventDefault(); handleDelFav(fav) }}
							style={{ cursor: 'pointer', padding: '0.5rem' }}
							key={index}
						>
							{fav.name}
						</Tag>
					)}
				</div>
			</Row>
		</>

	)
}