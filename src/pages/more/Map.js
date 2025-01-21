import clsx from "clsx"
import Layout from "@theme/Layout"
import styles from "./../index.module.css"
import Iframe from "../../components/Iframe"
import { Button, Col, Collapse, ConfigProvider, Flex, Input, InputNumber, Modal, Row, Select, Tag } from "antd"
import { HeartTwoTone } from '@ant-design/icons'

import { useEffect, useMemo, useState } from "react"

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

const _FavList = [
	{ name: 'OldSpawn', world: 'minecraft_overworld', xAxis: 0, zAxis: 0, color: 'pink' },
	{ name: 'LMEGrandStation', world: 'minecraft_the_nether', xAxis: -40, zAxis: 70, zoom: 4, color: 'pink' },
	{ name: 'Wanted!', world: 'minecraft_overworld', xAxis: -4870, zAxis: -2040, zoom: 5, color: 'pink' },
]

const _AntdColor = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']

export default function MapPage() {

	const initState = {
		basePath: 'https://map.lamalia.net/',
		path: 'https://map.lamalia.net/',
		world: worldList[0].value,
		showIframe: true,
		xAxis: 0,
		zAxis: 0,
		showConfirmModal: false,
		name: '',
		zoom: 3,
		color: ''
	}
	const [state, setState] = useState(initState)

	const [favList, setFavList] = useState(() => {
		const _favList = localStorage.getItem('favList')
		return _favList ? JSON.parse(_favList) : _FavList
	})

	useEffect(() => {
		localStorage.setItem('favList', JSON.stringify(favList))
	}, [favList])

	const handleResetFavList = () => {
		setFavList(_FavList)
	}

	const handleChangeState = (value, key) => {
		setState((prev) => ({
			...prev,
			[key]: value
		}))
	}

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

	const handleAddFavList = () => {
		setFavList((prev) => ([
			...prev,
			{
				name: state.name || state.world + state.xAxis + state.zAxis,
				world: state.world,
				xAxis: state.xAxis,
				zAxis: state.zAxis,
				zoom: state.zoom,
				color: state.color
			}
		]))
		handleChangeState(false, 'showConfirmModal')
	}

	const mapProps = {
		state,
		handleChangeState,
		handleClickGo,
		handleClickFav,
		handleDelFav,
		favList,
		handleResetFavList,
		handleAddFavList
	}

	const items = [
		{
			key: '1',
			label: 'Coordinate X, Z',
			label: <MapSelectBar {...mapProps} />,
			children: <MapFav state={state} {...mapProps} />,
		}
	]

	return (
		<ConfigProvider
			theme={{
				components: {
					Collapse: {
						headerBg: '#F5F5F5',
						contentBg: '#F8F8F8'
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
										// defaultActiveKey={1}	//เดี๋ยวมาเอาออก
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
							<ModalAddFav {...mapProps} />
						</div>
					</header>
				</main>
			</Layout>
		</ConfigProvider>
	)
}

function MapSelectBar({
	state,
	handleChangeState,
	handleClickGo,
}) {

	const worldData = useMemo(() => {
		return worldList.find((el) => el.value === state.world)
	}, [state.world])

	const handleShowModalConfirm = () => {
		handleChangeState('', 'name')
		handleChangeState('3', 'zoom')
		handleChangeState('orange', 'color')
		handleChangeState(true, 'showConfirmModal')
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
				style={{ marginTop: '1rem', textAlign: 'start' }}
				onClick={(e) => e.stopPropagation()}
			>
				<Col span={6} >
					x-Axis
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
					z-Axis
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
					World
					<Select
						options={worldList.map(({ value, label }) => ({ value, label }))}
						style={{ width: '100%' }}
						value={state.world}
						onChange={(value) => handleChangeState(value, 'world')}
					/>
				</Col>
				<Col>
					<br />
					<Button onClick={handleClickGo}>Go!</Button>
					<Button
						onClick={handleShowModalConfirm}
						icon={<HeartTwoTone />}
						style={{ marginLeft: '0.5rem' }}
					/>
				</Col>
			</Row>
		</>)
}

function MapFav({
	handleClickFav,
	handleDelFav,
	favList,
	handleResetFavList,
}) {

	return (
		<>
			<Row
				style={{
					margin: '1rem',
					backgroundColor: '#F0F0F0',
					borderRadius: '10px',
					padding: '0.5rem'
				}}
			>
				{favList.map((fav, index) =>
					<Tag
						color={fav.color || "orange"}
						closeIcon
						onClick={(e) => { e.preventDefault(); handleClickFav(fav) }}
						onClose={(e) => { e.preventDefault(); handleDelFav(fav) }}
						style={{ cursor: 'pointer', padding: '0.5rem', margin: '0.25rem' }}
						key={index}
					>
						{fav.name}
					</Tag>
				)}
			</Row>
			<Row
				style={{
					marginRight: '1rem',
					justifyContent: 'end'
				}}
			>
				{/* reset */}
				<Button
					color="danger" variant="filled"
					onClick={handleResetFavList}
					style={{ marginTop: '-0.5rem' }}
				>reset
				</Button>
			</Row>
		</>
	)
}

function ModalAddFav({
	state,
	handleChangeState,
	handleAddFavList
}) {
	return (
		<Modal
			title="Basic Modal"
			open={state.showConfirmModal}
			onCancel={() => handleChangeState(false, 'showConfirmModal')}
			onOk={handleAddFavList}
			onClick={(e) => e.stopPropagation()}
		>
			<Row
				justify="center"
				style={{ marginTop: '1rem' }}
				onClick={(e) => e.stopPropagation()}
			>
				<div style={{ margin: '0.25rem' }}>
					Name
					<Input
						placeholder="name"
						style={{ width: '100%' }}
						allowClear
						onChange={(e) => handleChangeState(e.target.value, 'name')}
						value={state.name}
					/>
				</div>
				<div style={{ margin: '0.25rem' }}>
					Zoom
					<InputNumber
						placeholder="zoom"
						style={{ width: '100%' }}
						onChange={(e) => handleChangeState(e, 'zoom')}
						value={state.zoom}
					/>
				</div>
				<div style={{ margin: '0.25rem' }}>
					Color
					<Select
						options={_AntdColor.map((el) => ({ label: el, value: el, }))}
						style={{ width: '100%' }}
						onChange={(e) => handleChangeState(e, 'color')}
						value={state.color}
					/>
				</div>
			</Row>
		</Modal>
	)
}