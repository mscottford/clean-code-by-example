require 'spec_helper'
require 'square'

describe Square do
  it 'computes values correctly' do
    square = Square.new(12)

    expect(square.length).to eq(12)
    expect(square.area).to eq(144)
    expect(square.perimeter).to eq(48)
  end
end
