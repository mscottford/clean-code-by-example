# Implementation of gaussian filter algorithm from https://github.com/TheAlgorithms/Python
# License: MIT - full license text at the bottom of this file
# Source: https://raw.githubusercontent.com/TheAlgorithms/Python/master/digital_image_processing/filters/gaussian_filter.py
# Retrieved on 2019-07-05

# This file has been modified from the original. Whitespace has been removed
# so that we can practice adding it back where it's best needed

from cv2 import imread, cvtColor, COLOR_BGR2GRAY, imshow, waitKey
from numpy import pi, mgrid, exp, square, zeros, ravel, dot, uint8
def gen_gaussian_kernel(k_size,sigma):
    center=k_size//2
    x,y=mgrid[0-center:k_size-center,0-center:k_size-center]
    g=1/(2*pi*sigma)*exp(-(square(x)+square(y))/(2*square(sigma)))
    return g
def gaussian_filter(image,k_size,sigma):
    height,width=image.shape[0],image.shape[1]
    # dst image height and width
    dst_height=height-k_size+1
    dst_width=width-k_size+1
    # im2col, turn the k_size*k_size pixels into a row and np.vstack all rows
    image_array=zeros((dst_height*dst_width,k_size*k_size))
    row=0
    for i in range(0,dst_height):
        for j in range(0,dst_width):
            window=ravel(image[i:i+k_size,j:j+k_size])
            image_array[row,:]=window
            row+=1
    #  turn the kernel into shape(k*k, 1)
    gaussian_kernel=gen_gaussian_kernel(k_size,sigma)
    filter_array=ravel(gaussian_kernel)
    # reshape and get the dst image
    dst=dot(image_array,filter_array).reshape(dst_height,dst_width).astype(uint8)
    return dst
if __name__=='__main__':
    # read original image
    img=imread(r'../image_data/lena.jpg')
    # turn image in gray scale value
    gray=cvtColor(img,COLOR_BGR2GRAY)
    # get values with two different mask size
    gaussian3x3=gaussian_filter(gray,3,sigma=1)
    gaussian5x5=gaussian_filter(gray,5,sigma=0.8)
    # show result images
    imshow('gaussian filter with 3x3 mask',gaussian3x3)
    imshow('gaussian filter with 5x5 mask',gaussian5x5)
    waitKey()

# MIT License
#
# Copyright (c) 2019 The Algorithms
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
