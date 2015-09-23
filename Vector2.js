var Vector2 = function ()
{
	this.x = 0;
	this.y = 0;
};

Vector2.prototype.set = function (x, y) 
{
	this.x = x;
	this.y = y;
	
};

Vector2.prototype.normalize = function (){
	var dir = (this.x * this.x) + (this.y *this.y);
	if(dir != 0)
	{
		this.x = this.x / Math.sqrt(dir);
		this.y = this.y / Math.sqrt(dir);
	}
};



Vector2.prototype.add = function (v2)
{
	this.x = this.x + v2.x;
	this.y = this.y + v2.y;
};



Vector2.prototype.subtract = function (v2)
{
	this.x = this.x - v2.x;
	this.y = this.y - v2.y;
};


Vector2.prototype.multiplyScalar = function (num)
{
	this.x = this.x * num.x;
	this.y = this.y * num.y;
};