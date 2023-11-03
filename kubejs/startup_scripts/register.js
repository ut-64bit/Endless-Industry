// priority: 0

const $FlintAndSteelItem = Java.loadClass('net.minecraft.world.item.FlintAndSteelItem')
const $Properties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')

/**
 * Item
 */

ItemEvents.toolTierRegistry(event => {
})

StartupEvents.registry("item", event => {
	event.create("kubejs:plant_fiber")
	event.createCustom('fire_stick',
		() => new $FlintAndSteelItem(
			new $Properties()
				.tab($KubeJS.tab)
				.stacksTo(1)
				.defaultDurability(1)
		))
})

ItemEvents.modification(event => {
})


/**
 * Block
 */

StartupEvents.registry("block", event => {
})
