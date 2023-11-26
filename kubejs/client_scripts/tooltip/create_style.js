// requires: create

// import
const ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription$Modifier")
const TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier")
const Palette = Java.loadClass("com.simibubi.create.foundation.item.TooltipHelper$Palette")

ItemEvents.tooltip(tooltip => {
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


})