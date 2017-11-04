import $ from 'jquery';

//Build switcher with default properties
class TabSwitcher {
	constructor(wrapper, tabs, sections) {
		var self = this;
		
		self.wrapper = wrapper;
		self.tabs = tabs;
		self.sections = sections;
		
		self.active = 0;
		self.next = -1;
	}
	
	// Add new tab to switcher (called externally)
	addTab(el) {
		this.tabs.push(new Tab(this, el, this.tabs.length) );
	}
	// Add new section to switcher (called externally)
	addSection(el) {
		this.sections.push(new Section(this, el, this.sections.length) );
	}
}

//Tab class with handler
class Tab {
	constructor(switcher, el, i) {
		var tab = this;
		
		tab.el		= el;
		tab.index	= i;
		tab.active	= tab.index == 0;
		
		console.log(this.el, 'el');
		this.el.addEventListener("click", function(e) {
			e.preventDefault();
			
			switcher.next = tab.index;
			if(switcher.active != switcher.next){
				var tl = new TimelineMax();
				
				console.log(switcher.tabs[switcher.active].el.active);
				tl.to(switcher.sections[switcher.active].el, 0.5, {y: 50, opacity: 0})
				.to(switcher.sections[switcher.active].el, 0, {display: 'none'});
				
				switcher.active = switcher.next;
				
				tl.to(switcher.sections[switcher.active].el, 0, {display: 'block'})
				.from(switcher.sections[switcher.active].el, 0.5, {y: 50, opacity: 0});
			}
		});
	}
}

//Section class
class Section {
	constructor(switcher, el, i) {
		var tab = this;
		
		tab.el		= el;
		tab.index	= i;
	}
}

export default TabSwitcher;