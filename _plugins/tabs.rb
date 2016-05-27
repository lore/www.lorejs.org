module Tags
  class TabsBlock < Liquid::Block
    def initialize(tag_name, attributes, tokens)
      super
      @tabs = attributes.split(',')
    end

    def render_tab(name, is_active)
      class_string = is_active ? 'active' : ''
      return %Q(
        <li role='presentation' class='#{class_string}'>
          <a href='#tab-#{name}' role='tab' data-toggle='tab'>#{name}</a>
        </li>
      )
    end

    def render(context)
      output = "<ul class='nav nav-tabs' role='tablist'>"
      is_active = true

      @tabs.each do |tab|
        tokens = tab.split('=')
        key = tokens[0].strip()
        value = tokens[1].strip()
        value = value[1...-1] #strip out the beginning and ending quotes
        output = output + self.render_tab(value, is_active)
        is_active = false
      end

      output = output + "</ul>"

      return output + "<div class='tab-content'>" + super + "</div>"
    end
  end

  class TabBlock < Liquid::Block
    def initialize(tag_name, attributes, tokens)
      super
      @attributes = {}

      attributes.split(',').each do |attribute|
        tokens = attribute.split('=')
        key = tokens[0].strip()
        value = tokens[1].strip()
        value = value[1...-1] #strip out the beginning and ending quotes
        @attributes[key] = value
      end
    end

    def render_tab_content(content)
      class_string = !!@attributes['is_active'] ? 'tab-pane active' : 'tab-pane'

      return %Q(
        <div role='tabpanel' class='#{class_string}' id='tab-#{@attributes['name']}'>
          #{content}
        </div>
      )
    end

    def render(context)
      return "" if @attributes.empty?

      site      = context.registers[:site]
      converter = site.find_converter_instance(Jekyll::Converters::Markdown)

      lines = super.rstrip.split(/\r\n|\r|\n/).select { |line| line.size > 0 }
      indentation = lines.map do |line|
        match = line.match(/^(\s+)[^\s]+/)
        match ? match[1].size : 0
      end
      indentation = indentation.min

      content = indentation ? super.gsub(/^#{' |\t' * indentation}/, '') : super
      content = converter.convert(content)

      tab_html =self.render_tab_content(content.strip()).strip()

      return tab_html
    end
  end
end

Liquid::Template.register_tag("tabs", Tags::TabsBlock)
Liquid::Template.register_tag("tab",  Tags::TabBlock)
