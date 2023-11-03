// priority: 0

// import
const ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription$Modifier")
const TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier")
const Palette = Java.loadClass("com.simibubi.create.foundation.item.TooltipHelper$Palette")

JEIEvents.removeCategories(event => {
	global.deleteRecipeType.forEach(element => { event.remove(element) })
})

JEIEvents.hideItems(event => {
	global.deleteItem.forEach(element => { event.hide(element) })
})

JEIEvents.addItems(event => {
	event.add(Item.of("create:chromatic_compound"))
	event.add(Item.of("create:refined_radiance"))
	event.add(Item.of("create:shadow_steel"))
	event.add(Item.of("create:refined_radiance_casing"))
	event.add(Item.of("create:shadow_steel_casing"))

	event.add(Item.of("immersiveengineering:blueprint"))
})

ItemEvents.tooltip(tooltip => {
	// 削除したアイテムの表示
	tooltip.add(global.deleteItem, Text.red("DELETED").underlined().italic())

	/**
	 * @param {Special.Item} tooltipItem
	 */
	function createTooltip(tooltipItem) {
		tooltip.addAdvanced(tooltipItem, (item) => {
			TooltipModifier.REGISTRY.register(
				item.item,
				new ItemDescription(item.item, Palette.STANDARD_CREATE)
			);
		});
	}

	tooltip.addAdvanced("#fabrication:nether_tools", (item, advanced, text) => {
		text.add(1, Text.translate("item.minecraft.nethers_speciality.tooltip").red())
	})
	tooltip.addAdvanced("#fabrication:nether_only_tools", (item, advanced, text) => {
		text.add(1, Text.translate("item.minecraft.nether_exclusive.tooltip").red())
	})

})