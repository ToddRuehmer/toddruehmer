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
		if(this.tabs.length == 0){
			el.classList.value += " TR-ResumeTab_active";
		}
		this.tabs.push(new Tab(this, el, this.tabs.length) );
	}
	// Add new section to switcher (called externally)
	addSection(el) {
		this.sections.push(new Section(this, el, this.sections.length) );
	}
	
	switchTab () {
		if(this.active != this.next){
			var tl = new TimelineMax(),
				activeTab = this.tabs[this.active],
				activeSection = this.sections[this.active];
				
			this.tabs[this.active].isActive = false;
			activeTab.el.classList.value = activeTab.el.classList.value.replace(" TR-ResumeTab_active", "");
			
			tl.to(activeSection.el, 0.2, {opacity: 0})
			.to(activeSection.el, 0, {display: 'none'});
			
			this.active = this.next;
			activeTab = this.tabs[this.active];
			activeSection = this.sections[this.active];
			
			activeSection.isActive = true;
			activeTab.el.classList.value += " TR-ResumeTab_active";
			tl.to(activeSection.el, 0, {display: 'block'})
			.fromTo(activeSection.el, 0.2, {y: 50, opacity: 0}, {y: 0, opacity: 1});
		}
	}
}

//Tab class with handler
class Tab {
	constructor(switcher, el, i) {
		var tab = this;
		
		tab.el			= el;
		tab.index		= i;
		tab.isActive	= tab.index == 0;
		
		this.el.addEventListener("click", function(e) {
			e.preventDefault();
			
			switcher.next = tab.index;
			switcher.switchTab();
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