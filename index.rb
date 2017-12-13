class BoardMember
  attr_accessor :name, :homeState, :training
  def initialize(name, homeState, training)
    @name = name
    @homeState = homeState
    @training = training
  end

  def approve
    "No, I must disagree!"
  end

end
