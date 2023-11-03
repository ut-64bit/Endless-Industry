// requires: lodestone

let size
LevelEvents.beforeExplosion(event => size = event.size)

LevelEvents.afterExplosion(event => {
	const { x, y, z, level } = event
	let max_distance = Math.sqrt(100 * size)
	level.getEntitiesWithin(AABB.of(x - max_distance, y - max_distance, z - max_distance, x + max_distance, y + max_distance, z + max_distance)).forEach(entity => {
		if (entity.isPlayer()) {
			let distance = entity.getDistance(x, y, z)
			distance = max_distance - distance
			//distance = (distance * distance) / (max_distance * max_distance)
			distance = distance / max_distance
			size = size / (size + 1)
			entity.sendData('screenshake', { i1: distance * 1.5 * size, i2: distance * 2.5 * size, i3: distance * 0.48 * size, duration: 15 })
		}
	})
})